export const createBench = (bench) => {
  return $.ajax({
    method: 'POST',
    url: 'api/benches',
	  data: { bench }
  });
};

export const fetchBenches = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/benches'
  });
};
