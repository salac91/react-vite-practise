import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { Spinner } from "@material-tailwind/react";
import { getQuestions } from '../../redux/actionCreators/getQuestions';
import { useTypedSelector } from '../../hooks/useTypeSelector';
import EditIcon from "../../assets/edit_icon.png";
import './QuestionsList.css'

const QuestionsList = () => {
  const dispatch = useDispatch();
  const { questions, loading, error } = useTypedSelector((state) => state.questions);

  useEffect(() => {
    dispatch(getQuestions())
  }, [])

  if(error) {
    return (
      <div>Something went wrong, please reload page.</div>
    )
  }

  return (
    <div>
      { loading ?
        <Spinner /> :
        <>
          <h1 className="mb-8 text-3xl">Questions List</h1>
          {
            questions.map((question) => {
              return(
                <div key={question.id} className="max-w-sm mt-3 rounded overflow-hidden shadow-lg">
                  <div className="px-6 py-4">
                    <div className="mb-2 title-container">
                      <div className="font-bold text-xl">{question.title}</div>
                      <Link to={"/edit/" + question.id}>
                        <img src={EditIcon} className="edit-icon" />
                        </Link>
                    </div>
                    <p className="text-gray-700 text-base">
                      {question.content}
                    </p>
                    <p className="mt-2 text-gray-700 text-base text-left">
                      {question.createdBy} - {question.createdAt}
                    </p>
                  </div>
                  <div className="px-6 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      #{question.field}
                    </span>
                  </div>
                </div>
              )
            })
          }
          <div className='mt-8'>
            <Link className="text-lg" to= "/add">Add</Link>
          </div>
        </>
      }
    </div>
  )
}

export default QuestionsList;
