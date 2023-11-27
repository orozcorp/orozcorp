const instance = process.env.WA_INSTANCE;
const token = process.env.WA_TOKEN;

export async function sendImagesParallel({ clientsSent, message, image }) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  // Function to create a fetch request for a given client
  const createFetchRequest = async (client) => {
    const objToInsert = {
      token, // assuming token is available in the scope
      to: client,
      caption: message,
      image,
    };
    var raw = JSON.stringify(objToInsert);
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    return fetch(
      `https://api.ultramsg.com/${instance}/messages/image`,
      requestOptions
    )
      .then((response) =>
        response.text().then((result) => ({ response, result }))
      )
      .then(({ response, result }) => {
        if (response.ok) {
          return {
            code: 200,
            success: true,
            message: "Mensaje enviado",
            data: result,
          };
        } else {
          const errorResponse = JSON.parse(result);
          return {
            code: errorResponse.code || 400,
            success: false,
            message: errorResponse.message || "Error al enviar el mensaje",
          };
        }
      })
      .catch((error) => {
        console.log("error", error);
        return {
          code: 400,
          success: false,
          message: "Error al enviar el mensaje",
        };
      });
  };

  // Creating an array of promises for each client
  const requests = clientsSent.map((client) => createFetchRequest(client));

  // Using Promise.all to execute all requests in parallel
  try {
    const results = await Promise.all(requests);
    return results; // This will be an array of responses for each request
  } catch (error) {
    console.log("error", error);
    return {
      code: 400,
      success: false,
      message: "Error al enviar el mensaje",
    };
  }
}
export async function sendDocumentsParallel({
  clientsSent,
  message,
  document,
  documentName,
}) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  // Function to create a fetch request for a given client
  const createFetchRequest = async (client) => {
    const objToInsert = {
      token, // assuming token is available in the scope
      to: client,
      caption: message,
      document,
      filename: documentName,
    };
    var raw = JSON.stringify(objToInsert);
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    return fetch(
      `https://api.ultramsg.com/${instance}/messages/document`,
      requestOptions
    )
      .then((response) =>
        response.text().then((result) => ({ response, result }))
      )
      .then(({ response, result }) => {
        if (response.ok) {
          return {
            code: 200,
            success: true,
            message: "Mensaje enviado",
            data: result,
          };
        } else {
          const errorResponse = JSON.parse(result);
          return {
            code: errorResponse.code || 400,
            success: false,
            message: errorResponse.message || "Error al enviar el mensaje",
          };
        }
      })
      .catch((error) => {
        console.log("error", error);
        return {
          code: 400,
          success: false,
          message: "Error al enviar el mensaje",
        };
      });
  };

  // Creating an array of promises for each client
  const requests = clientsSent.map((client) => createFetchRequest(client));

  // Using Promise.all to execute all requests in parallel
  try {
    const results = await Promise.all(requests);
    return results; // This will be an array of responses for each request
  } catch (error) {
    console.log("error", error);
    return {
      code: 400,
      success: false,
      message: "Error al enviar el mensaje",
    };
  }
}

export async function sendTextMessagesParallel({ clientsSent, message }) {
  // Preparing headers and body outside the loop as they remain constant for each request
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  // Function to create a fetch request for a given client
  const createFetchRequest = async (client) => {
    let urlencoded = new URLSearchParams();
    urlencoded.append("token", process.env.WA_TOKEN);
    urlencoded.append("to", client);
    urlencoded.append("body", message);

    let requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };
    return fetch(
      `https://api.ultramsg.com/${process.env.WA_INSTANCE}/messages/chat`,
      requestOptions
    )
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData);
        if (responseData.message !== "ok") {
          console.log("error", responseData);
          return {
            code: 400,
            success: false,
            message: "Error al enviar el mensaje",
          };
        }
        return {
          code: 200,
          success: true,
          message: "Mensaje enviado correctamente",
        };
      })
      .catch((error) => {
        console.log("error", error);
        return {
          code: 400,
          success: false,
          message: "Error al enviar el mensaje",
        };
      });
  };

  // Creating an array of promises for each client
  const requests = clientsSent.map((client) => createFetchRequest(client));

  // Using Promise.all to execute all requests in parallel
  try {
    const results = await Promise.all(requests);
    return results; // This will be an array of responses for each request
  } catch (error) {
    console.log("error", error);
    return {
      code: 400,
      success: false,
      message: "Error al enviar el mensaje",
    };
  }
}
