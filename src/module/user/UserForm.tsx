import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, rootState } from "../../app/store";
import { setuserAction } from "./UserSlice";
import { useState } from "react";
import { Iuser } from "./user.type";

function UserForm() {
  const { list } = useSelector((state: rootState) => state.user);
  const [form, setForm] = useState<Iuser>({
    id: null,
    name: "",
    email: "",
  });
  const dispatch = useDispatch<AppDispatch>();
  const handleSet = (e: React.FormEvent) => {
    e.preventDefault();
    const newForm = {
      ...form,
      id: list.length + 1,
    };
    dispatch(setuserAction(newForm));
    console.log(newForm);
    setForm({ id: null, name: "", email: "" });
  };

  return (
    <form onSubmit={handleSet}>
      <label htmlFor="name">Nom :</label>
      <input
        type="text"
        id="name"
        name="name"
        required
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <br />
      <br />
      <label htmlFor="email">Email :</label>
      <input
        type="email"
        id="email"
        name="email"
        required
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <br />
      <br />
      <button type="submit">Envoyer</button>
    </form>
  );
}

export default UserForm;
