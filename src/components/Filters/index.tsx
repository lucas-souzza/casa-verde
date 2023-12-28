import useFilter from "../../hooks/useFilter";
import useOrdering from "../../hooks/useOrdering";

function Filters() {
	const { ordering, setOrdering } = useOrdering();
	const setFilter = useFilter();

	return (
		<div>
			<div>
				<p>Ordenar por: </p>
				<select
					value={ordering}
					onChange={event => setOrdering(event.target.value)}
				>
					<option></option>
					<option value="preco-crescente">Preço | crescente</option>
					<option value="preco-decrescente">
						Preço | decrescente
					</option>
					<option value="nome-crescente">Nome | A - Z</option>
					<option value="nome-decrescente">Nome | Z - A</option>
				</select>
			</div>

			<div>
				<p>Filtrar por intervalo de preço:</p>

				<div>
					<label>Min:</label>
					<input
						type="number"
						onChange={event =>
							setFilter(prevFilter => ({
								...prevFilter,
								minPrice: Number(event.target.value),
							}))
						}
					/>
				</div>

				<div>
					<label>Max:</label>
					<input
						type="number"
						onChange={event =>
							setFilter(prevFilter => ({
								...prevFilter,
								maxPrice: Number(event.target.value),
							}))
						}
					/>
				</div>
			</div>
		</div>
	);
}

export default Filters;
