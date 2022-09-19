import * as teachersRepository from "../repositories/teachersRepository";
import * as disciplinesRepository from "../repositories/disciplinesRepository";

async function getTeachersByDiscipline(disciplineName: string) {
  const discipline = await disciplinesRepository.findByName(disciplineName);
  if (!discipline) {
    throw {
        code :"Bad Request"
    }
  }

  return await teachersRepository.findAllByDiscipline(disciplineName);
}

const teachersServer = {
  getTeachersByDiscipline,
};

export default teachersServer;