import React, {ChangeEvent, CSSProperties, useEffect, useRef, useState} from "react";

interface Props {
  style?: CSSProperties,
  callback?(e: ChangeEvent): void
}


const Input: React.FC<Props> = ({ style, callback }) => {
  const refDiv = useRef<HTMLDivElement>(null);
  const refInp = useRef<HTMLTextAreaElement>(null);
  const [value, setValue] = useState("");
  useEffect(() => {
    if (refInp.current != null) {
      refInp.current.style.display = 'none';
    }
  }, []);


  const onClickDivHandler = () => {
    if (refDiv.current && refInp.current) {
      refDiv.current.style.display = "none";
      refInp.current.style.display = "block";
      refInp.current.focus();
    }
  };

  const onChangeInputHandler = (e: ChangeEvent) => {
    setValue(refInp?.current?.value ?? "");
    if (callback) callback(e);
  };

  const onBlurInputHandler = () => {
    if (refDiv.current && refInp.current) {
      refDiv.current.style.display = "block";
      refInp.current.style.display = 'none';
    }
  };

  return (
    <div>
      <textarea style={ style }  ref={refInp} onBlur={onBlurInputHandler} onChange={onChangeInputHandler} />
      <div style={ style } ref={refDiv} onClick={onClickDivHandler}>
        {value}
      </div>
    </div>
  );
}


export default Input;