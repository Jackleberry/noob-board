import expect from 'expect';
import deepFreeze from 'deep-freeze-es6';
import VisibilityFilter from './VisibilityFilter';

describe("Visibility Fiter Reducer", () => {
  it("should set the visibility filter when passed SET_VISIBILITY_FILTER", () => {
    const stateBefore = "SHOW_ALL";
    const stateAfter = "SHOW_COMPLETED";
    const action = {
      type: "SET_VISIBILITY_FILTER",
      filter: "SHOW_COMPLETED"
    };

    deepFreeze(stateBefore);

    expect(VisibilityFilter(stateBefore, action)).toEqual(stateAfter);
  });
});


