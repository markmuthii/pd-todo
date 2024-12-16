export const getHome = (req, res) => {
  console.log(req.wristBand);

  res.json({
    message: "Silence is golden",
  });
};
