//var object = {};
function updateObjectWithKeyAndValue(object, key, value)  {
  var newobject = Object.assign({},object)
  Object.assign(newobject,{[key]:value});
  return newobject;
}
