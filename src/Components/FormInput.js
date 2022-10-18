import { useState } from "react";

const realmListEU = [
  {
    id: 4440,
    name: "Everlook",
  },
  {
    id: 4441,
    name: "Auberdine",
  },
  {
    id: 4442,
    name: "Lakeshire",
  },
  {
    id: 4452,
    name: "Chromie",
  },
  {
    id: 4453,
    name: "Pyrewood Village",
  },
  {
    id: 4454,
    name: "Mirage Raceway",
  },
  {
    id: 4455,
    name: "Razorfen",
  },
  {
    id: 4456,
    name: "Nethergarde Keep",
  },
  {
    id: 4463,
    name: "Lucifron",
  },
  {
    id: 4464,
    name: "Sulfuron",
  },
  {
    id: 4465,
    name: "Golemagg",
  },
  {
    id: 4466,
    name: "Patchwerk",
  },
  {
    id: 4467,
    name: "Firemaw",
  },
  {
    id: 4474,
    name: "Flamegor",
  },
  {
    id: 4475,
    name: "Shazzrah",
  },
  {
    id: 4476,
    name: "Gehennas",
  },
  {
    id: 4477,
    name: "Venoxis",
  },
  {
    id: 4478,
    name: "Razorgore",
  },
  {
    id: 4676,
    name: "Zandalar Tribe",
  },
  {
    id: 4678,
    name: "Hydraxian Waterlords",
  },
  {
    id: 4701,
    name: "Mograine",
  },
  {
    id: 4702,
    name: "Gandling",
  },
  {
    id: 4703,
    name: "Amnennar",
  },
  {
    id: 4704,
    name: "Wyrmthalak",
  },
  {
    id: 4705,
    name: "Stonespine",
  },
  {
    id: 4706,
    name: "Flamelash",
  },
  {
    id: 4741,
    name: "Noggenfogger",
  },
  {
    id: 4742,
    name: "Ashbringer",
  },
  {
    id: 4743,
    name: "Skullflame",
  },
  {
    id: 4744,
    name: "Finkle",
  },
  {
    id: 4745,
    name: "Transcendence",
  },
  {
    id: 4746,
    name: "Bloodfang",
  },
  {
    id: 4749,
    name: "Earthshaker",
  },
  {
    id: 4751,
    name: "Dragonfang",
  },
  {
    id: 4754,
    name: "Rhok'delar",
  },
  {
    id: 4755,
    name: "Dreadmist",
  },
  {
    id: 4756,
    name: "Dragon's Call",
  },
  {
    id: 4757,
    name: "Ten Storms",
  },
  {
    id: 4758,
    name: "Judgement",
  },
  {
    id: 4759,
    name: "Celebras",
  },
  {
    id: 4763,
    name: "Heartstriker",
  },
  {
    id: 4766,
    name: "Harbinger of Doom",
  },
  {
    id: 4813,
    name: "Mandokir",
  },
];

const FormInput = () => {
  const [input, setInput] = useState("");
  console.log(input);
  return (
    <div className="input-container">
      <form>
        <div className="select-container">
          <select>
            {realmListEU.map((el) => {
              return <option key={el.id}>{el.name}</option>;
            })}
          </select>
          <select>
            <option>Alliance</option>
            <option>Horde</option>
          </select>
        </div>
        <div className="text-input-container">
          <input
            type="text"
            placeholder="Item name..."
            onChange={(e) => setInput(e.target.value)}
          />
          <button>Go!</button>
        </div>
      </form>
    </div>
  );
};

export default FormInput;
