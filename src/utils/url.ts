export const parseUrl = (url: string) => {
  const [pathParams, queryParams] = url.split("?");
  const cleanedPathParams = pathParams
    .split("/")
    .slice(1)
    .filter((param) => param !== "api");

  const response: Record<string, string | number> = {
    version: Number(cleanedPathParams[0]) || "",
    collection: cleanedPathParams[1] || "",
    id: Number(cleanedPathParams[2]) || "",
  };

  const querySplited = queryParams?.split("&") || [];
  querySplited.forEach((queryParam) => {
    const [key, value = ""] = queryParam.split("=");
    response[key] = Number(value) || value;
  });

  return response;
};
