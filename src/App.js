import { useSelector, useDispatch } from 'react-redux'

function App() {
  const selector = useSelector(state => state)
  const dispatch = useDispatch();

  const incrementar = () =>{
    return {type: 'INCREMENTAR'}
  }

  return (
    <div className="App">
      {selector}

      <button onClick={() => dispatch(incrementar())}>
        Add
      </button>
    </div>
  );
}

export default App;
