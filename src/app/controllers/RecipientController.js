import Recipient from '../models/recipient';

class RecipientController {
  async store(req, res) {
    const { name } = req.body;

    const userExist = await Recipient.findOne({ where: { name } });
    if (userExist) {
      return res.status(400).json({ error: 'Recipient already exists' });
    }
    const {
      id,
      street,
      number,
      complement,
      state,
      city,
      zip_code,
    } = await Recipient.create(req.body);
    return res.json({
      id,
      name,
      street,
      number,
      complement,
      state,
      city,
      zip_code,
    });
  }

  async update(req, res) {
    const { name } = req.body;
    const user = await Recipient.findOne({ where: { name } });
    if (!user) {
      return res.status(400).json({ error: 'Recipient not found' });
    }
    await user.update(req.body);
    return res.json(req.body);
  }
}
export default new RecipientController();
