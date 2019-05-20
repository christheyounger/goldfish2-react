const apiUrl = "http://localhost:8000/api/tasks";

const defaultHeaders = { "Content-Type": "application/json" };

const addBody = (props, body) => ({
  ...props,
  headers: defaultHeaders,
  body: JSON.stringify(body)
});

const handleErrors = response => {
  if (!response.ok) throw new Error(response.status);
  return response;
};

const request = (path, options) =>
  fetch(apiUrl + path, options).then(handleErrors);

const get = path => request((path = ""), {}).then(response => response.json());

const post = (path, body) => request(path, addBody({ method: "POST" }, body));

const put = (path, body) => request(path, addBody({ method: "PUT" }, body));

const saveNew = body =>
  post("", body).then(request => {
    console.log(request);
  });

const patch = (path, body) => request(path, addBody({ method: "PATCH" }, body));

const modify = (id, body) => patch(`/${id}`, body);

const save = body => put("", body);

export { get, saveNew, modify, save };
