import React from "react";
import { render } from "@testing-library/react";
import { PokemonsProvider } from "../../store/pokemonsContext";

const AllProviders = ({ children }) => {
  return <PokemonsProvider>{children}</PokemonsProvider>;
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllProviders, ...options });

export * from "@testing-library/react";

export { customRender as render };
