Function updateObjectWithKeyAndValue(object, key, value)  {
  return object;
  Object.assign(object,{[key]:value});
  return object;
}
