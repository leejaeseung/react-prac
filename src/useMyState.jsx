let _value;

export const useMyState = (initValue) => {
  if (_value === undefined) {
    _value = initValue;
  }

  const setState = (newValue) => {
    _value = newValue;
    // 컴포넌트를 리렌더링
  };

  return [_value, setState];
};
