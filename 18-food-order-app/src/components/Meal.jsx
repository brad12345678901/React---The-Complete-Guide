import { useFetch } from "../hook/useFetch";
import { getMeals } from "../utils/api";
import MealItem from "./MealItem";

export default function Meal() {
  const { data: meals, setData: setMeals, isFetching } = useFetch(getMeals, []);

  return (
    <div id="meals">
      {isFetching && <p>Loading...</p>}
      {meals.length !== 0 &&
        meals.map((item) => <MealItem key={item.id} item={item} />)}
    </div>
  );
}
