import listings from '@/data.json';

export default function ListAPI(req, res) {
  res.status(200).json(listings);
}
