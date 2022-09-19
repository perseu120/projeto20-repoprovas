import * as categoriesRepository from "../repositories/categoriesRepository";
import * as disciplinesRepository from "../repositories/disciplinesRepository";

async function getDisciplinesByCategoryName(categoryName: string) {
  const category = await categoriesRepository.findByName(categoryName);
  if (!category) {
    throw {
        code :"NotFound"
    }
  }
  return await disciplinesRepository.findAllByCategory(categoryName);
}

const disciplinesServer = {
  getDisciplinesByCategoryName,
};

export default disciplinesServer;
