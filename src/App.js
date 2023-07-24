import { useEffect, React } from 'react'
import QuestionnaireModal from './components/QuestionnaireModal'
import { fetchUsers, usersSelector } from './lib/userSlice'
import { useDispatch, useSelector } from 'react-redux'

function App() {
  const showModal = window.sessionStorage.getItem('showModal')
  const dispatch = useDispatch()
  const users = useSelector(usersSelector)
  const hasSubmited = Boolean(users && users.find((item) => item.user === window.localStorage.getItem('user'))?.user)

  useEffect(() => {
    window.localStorage.setItem('user', 'exaasample@gmail.com')
    dispatch(fetchUsers())
  }, [])

  if (hasSubmited) {
    return <h1>User Has Submitted Before</h1>
  }

  return <div className="App">{users && showModal !== 'no' && <QuestionnaireModal />}</div>
}

export default App
