import { cleanError } from "utils";

describe("cleanError util", () => {
  it(">> should return formatter swagger error", () => {
    const error = {
      response: {
        data: {
          type: "Swagger validation error",
          status: 400,
          message:
            'The "body" body parameter is invalid ({"user_id":1,"subject":"asdfasdfsddsfasd","note":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent efficitur tempor lectus, et blandit lorem. Praesent eget odio pellentesque, placerat neque vel, elementum dolor. Donec id leo et metus condimentum aliquet id at justo. Aenean ac diam eu ipsum luctus tincidunt sed at purus. Sed vitae euismod nulla. Aliquam at faucibus dui. Nulla sagittis id justo nec cursus. Integer aliquam venenatis lorem, eget rhoncus massa lacinia eu. Duis posuere enim at consequat dapibus. Phasellus vulputate faucibus lacus, ut posuere augue porta a. Sed dui elit, placerat ut varius ac, facilisis at nulla. Nunc placerat odio nec diam rhoncus, elementum condimentum velit maximus. Suspendisse potenti. Nunc consectetur porta turpis, eget sodales ipsum ultricies a. Maecenas at lectus ac eros fermentum volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent efficitur tempor lectus, et blandit lorem. Praesent eget odio pellentesque, placerat neque vel, elementum dolor. Donec id leo et metus condimentum aliquet id at justo. Aenean ac diam eu ipsum luctus tincidunt sed at purus. Sed vitae euismod nulla. Aliquam at faucibus dui. Nulla sagittis id justo nec cursus. Integer aliquam venenatis lorem, eget rhoncus massa lacinia eu. Duis posuere enim at consequat dapibus. Phasellus vulputate faucibus lacus, ut posuere augue porta a. Sed dui elit, placerat ut varius ac, facilisis at nulla. Nunc placerat odio nec diam rhoncus, elementum condimentum velit maximus. Suspendisse potenti. Nunc consectetur porta turpis, eget sodales ipsum ultricies a. Maecenas at lectus ac eros fermentum volutpat"}) ',
          dataPath: 'Data path: "/note" ',
          schemaPath: 'Schema path: "/properties/note/maxLength" ',
          description: "String is too long (1604 chars), maximum 1000"
        }
      }
    };
    const cleanErr = cleanError(error);
    expect(cleanErr).toEqual(
      'API rejection: Status 400 - Swagger validation error - Data path: "/note"  - Schema path: "/properties/note/maxLength"  - String is too long (1604 chars), maximum 1000'
    );
  });

  it(">> should return formatted api error", () => {
    const error = {
      response: {
        data: {
          type: "Promise rejection error",
          status: 503,
          message: "Test message",
          description: "Test description"
        }
      }
    };
    const cleanErr = cleanError(error);
    expect(cleanErr).toEqual(
      "API rejection: Status 503 - Promise rejection error - Test description"
    );
  });

  it(">> should return request error", () => {
    const error = "Test error";
    const cleanErr = cleanError(error);
    expect(cleanErr).toEqual("Request error: Test error");
  });
});
