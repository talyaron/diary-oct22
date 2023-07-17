
import { Outlet } from 'react-router-dom'

const MainNotes = () => {
  return (
    <div>
        <h1>Notes</h1>
        <Outlet />
    </div>
  )
}

export default MainNotes