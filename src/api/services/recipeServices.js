import apiUtils from "../ApiUtils";

const service = {};
const serviceName = 'Recipe';

service.getAll = () => {
  return apiUtils.exec(`${serviceName}/GetAll`)
}

service.getById = (id) => {
  return apiUtils.exec(`${serviceName}/getById/${id}`)
}

export default service;