import apiUtils from "../ApiUtils";

const service = {};
const serviceName = 'Recipe';

service.getAll = () => {
  return apiUtils.exec(`${serviceName}/GetAll`)
}

export default service;