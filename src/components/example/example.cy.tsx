import { ExampleTest } from "./example";

it("should render ⭐", () => {
  // @ts-ignore
  cy.mount(<ExampleTest flag={true} />);
  cy.get("div.icon").should("contain.text", "⭐");
});

it("should render 💣", () => {
  // @ts-ignore
  cy.mount(<ExampleTest flag={false} />);
  cy.get("div.icon").should("contain.text", "💣");
});

it("Debug coverage object", () => {
  console.log("Global coverage object:", window.__coverage__);
  expect(window.__coverage__).to.exist;
});

it("should count clicks", () => {
  // @ts-ignore
  cy.mount(<ExampleTest flag={true} />);
  cy.get("span").should("contain.text", "Count:-1");
  cy.get("button").click();
  cy.get("span").should("contain.text", "Count:0");
});

it("should return 'is one' when count is 1", () => {
  // @ts-ignore
  cy.mount(<ExampleTest flag={true} />);
  cy.get("button").click();
  cy.get("button").click();
  cy.get("span").should("contain.text", "is one");
  cy.get("button").click();
  cy.get("span").should("contain.text", "is many");
});
