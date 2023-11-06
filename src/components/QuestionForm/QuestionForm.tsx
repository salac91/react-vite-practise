import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Navigate } from 'react-router-dom';
import { Spinner } from "@material-tailwind/react";
import { getQuestion } from '../../redux/actionCreators/getQuestion';
import { addQuestion } from '../../redux/actionCreators/addQuestion';
import { updateQuestion } from '../../redux/actionCreators/updateQuestion';
import { resetQuestion } from '../../redux/actionCreators/resetQuestion';
import { useTypedSelector } from '../../hooks/useTypeSelector';
import moment from 'moment'

const QuestionForm = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { question, loading, redirect } = useTypedSelector((state) => state.questions);

   const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if(params.id) {
      dispatch(getQuestion(params.id));
    }

    return () => {
      dispatch(resetQuestion());
    }
  }, [])

  useEffect(() => {
    reset(question)
  }, [question])

  if(redirect){
    return <Navigate to='/' />
  }

  return (
    <div>
      { loading && !question.id ?
        <Spinner /> :
        <>
          <h1 className="text-xl">{question.id ? 'Edit' : 'Add'} question</h1>
          <div className="w-full max-w-xs">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit((data) => { 
              const payload = {
                title: data.title,
                content: data.content,
                field: data.field,
                createdAt: moment().format('DD-MM-YYYY') ,
                createdBy: "Alex Alexon"
              }

              dispatch(question.id ?
                updateQuestion({
                  id: question.id,
                  ...payload
                }) :
                addQuestion({
                  ...payload
                })
              )}
            )}>
              <div className="mb-4">
                <input {...register('title', { required: true })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Title" />
                {errors.title && <p className="mt-1 text-left text-red-600">Title is required.</p>}
              </div>
              <div className="mb-4">
                <input {...register('content', { required: true })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Content" />
                {errors.content && <p className="mt-1 text-left text-red-600">Content is required.</p>}
              </div>
              <div className="mb-6">
                <input {...register('field', { required: true })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Field" />
                {errors.field && <p className="mt-1 text-left text-red-600">Field is required.</p>}
              </div>
              <input type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer" />
            </form>
          </div>
              
          <div className='mt-8'>
            <Link className='text-lg' to="/">Back</Link>
          </div>
        </>      
      }
    </div>
  )
}

export default QuestionForm;
