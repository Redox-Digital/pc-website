const ToastContainer = ({...props}) => {
  return (<div id="toast-container" className="toast-container">
    <style jsx>{`
    .toast-container {
      position: fixed;
      width: 100%;
      bottom: 20px;
      left: 0px;
    }
  `}</style>
  </div>);
}

export default ToastContainer;