const quizzesDao = require('../daos/quizzes-dao')
const findAllQuizzes = () => quizzesDao.findAllQuizzes()
const findQuizById = (qid) => quizzesDao.findQuizById(qid)

module.exports = {
    findAllQuizzes,
    findQuizById
}
