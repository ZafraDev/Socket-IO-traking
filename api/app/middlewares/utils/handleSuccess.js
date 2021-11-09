const handleSuccess = ({
  res = {},
  data = {},
  status = 200,
  message = "La solicitud se realizó de manera correcta" }
) => {
  return res.status(status).json({ data, message, status, success: true });
};

module.exports = { handleSuccess };