import yorkie from "yorkie-js-sdk";

const server = "https://api.yorkie.dev";
const apiKey = "cel7stqkdldurulgerj0";
const docKey = "my-first-document";
let client;
let doc;
let peers;
let unscribes = [];

export const yorkieStore = {
  subscribe: (callback) => {
    (async () => {
      if (!client) {
        client = new yorkie.Client(server, {
          apiKey,
        });

        await client.activate();

        doc = new yorkie.Document(docKey);
        await client.attach(doc);
      } else {
        unscribes.forEach((u) => {
          u();
        });
      }

      unscribes.push(
        client.subscribe((event) => {
          console.log(event);
          if (event.type === "peers-changed") {
            peers = event.value[doc.getKey()];
            callback();
          }
        })
      );
    })();
  },

  getSnapShot: () => {
    return {
      doc,
      client,
      peers,
    };
  },
};
