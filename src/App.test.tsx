import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import store from "store/store";

import App from "App";

describe("App", () => {
  window.scrollTo = jest.fn();

  test("if data is fetched on render", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    );

    const stores = store.getState();

    expect(stores.reviews.data).toBe(null);
    expect(stores.projects.data).toBe(null);
    expect(stores.auth.token).toBe(null);
  });
});
