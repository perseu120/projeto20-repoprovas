import * as categoriesRepository from "../repositories/categoriesRepository";

async function getCategories() {
  return categoriesRepository.find();
}

const categoriesServer = {
  getCategories
};

export default categoriesServer;
