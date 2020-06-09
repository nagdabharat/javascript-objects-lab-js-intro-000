Function updateObjectWithKeyAndValue(object, key, value)  {
  return object;
  var newobject = Object.assign({},object)
  Object.assign(newobject,{[key]:value});
  return newobject;
}
