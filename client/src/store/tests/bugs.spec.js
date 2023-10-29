import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { loadbugs, addBug, resolveBug, getUnresolvedBugs, assignBugToUser } from '../bugs';
import { addUser } from '../users';
import configureStore from '../configureStore';

describe('bugsSlice', () => {
  let fakeAxios;
  let store;

  beforeEach(() => {
    fakeAxios = new MockAdapter(axios);
    store = configureStore();
  });

  const bugsSlice = () => store.getState().entities.bugs;

  const createState = () => ({
    entities: {
      bugs: {
        list: [],
      },
    },
  });

  describe('Loading Bugs', () => {
    describe('If bugs exist in the cache', () => {
      it('should not request bugs from the server a second time', async () => {
        fakeAxios.onGet('/bugs').reply(200, [{ id: 1 }]);

        await store.dispatch(loadbugs());
        await store.dispatch(loadbugs());

        expect(fakeAxios.history.get.length).toBe(1);
      });
    });
    describe('If bugs do not exist in the cache', () => {
      it('should fetch bugs from the server and put in the store', async () => {
        fakeAxios.onGet('/bugs').reply(200, [{ id: 1 }]);

        await store.dispatch(loadbugs());

        expect(bugsSlice().list).toHaveLength(1);
      });

      describe('loading indicator', () => {
        it('should be true while fetching the bugs', () => {
          fakeAxios.onGet('/bugs').reply(() => {
            expect(bugsSlice().loading).toBe(true);
            return [200, [{ id: 1 }]];
          });

          store.dispatch(loadbugs());
        });
        it('should be false after fetching the bugs', async () => {
          fakeAxios.onGet('/bugs').reply(200, [{ id: 1 }]);

          await store.dispatch(loadbugs());

          expect(bugsSlice().loading).toBe(false);
        });
        it('should be false if the server returns an error', async () => {
          fakeAxios.onGet('/bugs').reply(500);

          await store.dispatch(loadbugs());

          expect(bugsSlice().loading).toBe(false);
        });
      });
    });
  });

  it("should add bug to the store if it's saved to the server", async () => {
    // AAA

    // Arrange
    const bug = { description: 'a' };
    const savedBug = { ...bug, id: 1 };
    fakeAxios.onPost('/bugs').reply(200, savedBug);

    // Act
    await store.dispatch(addBug(bug));

    // Assert
    expect(bugsSlice().list).toContainEqual(savedBug);
  });

  it("should not add bug to the store if it's not saved to the server", async () => {
    const bug = { description: 'a' };
    fakeAxios.onPost('/bugs').reply(500);

    await store.dispatch(addBug(bug));

    expect(bugsSlice().list).toHaveLength(0);
  });

  it("should mark the bug as resolved if it's saved to the server", async () => {
    fakeAxios.onPatch(`/bugs/1`).reply(200, { id: 1, resolved: true });
    fakeAxios.onPost('/bugs').reply(200, { id: 1 });

    await store.dispatch(addBug({}));
    await store.dispatch(resolveBug(1));

    expect(bugsSlice().list[0].resolved).toBe(true);
  });

  it("should not mark the bug as resolved if it's not saved to the server", async () => {
    fakeAxios.onPatch(`/bugs/1`).reply(500);
    fakeAxios.onPost('/bugs').reply(200, { id: 1 });

    await store.dispatch(addBug({}));
    await store.dispatch(resolveBug(1));

    expect(bugsSlice().list[0].resolved).not.toBe(true);
  });

  it('should assign a bug to a user if bug is on the server', async () => {
    fakeAxios.onPost('/bugs').reply(200, { id: 1 });
    fakeAxios.onPatch('/bugs/1').reply(200, { id: 1, userId: 2 });

    await store.dispatch(addBug({ id: 1 }));
    await store.dispatch(assignBugToUser(1, 2));

    expect(bugsSlice().list[0].userId).toBe(2);
  });

  describe('selectors', () => {
    it('should get unresolved bugs', () => {
      const state = createState();
      state.entities.bugs.list = [{ id: 1, resolved: true }, { id: 2 }, { id: 3 }];

      const result = getUnresolvedBugs(state);

      expect(result).toHaveLength(2);
    });
  });
});
