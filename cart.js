
		function renderCart(items) {
			const $cart = document.querySelector(".cart")
			const $total = document.querySelector(".total")

			$cart.innerHTML = items.map((item) => `
					<tr>
						<!-- <td>#${item.id}</td>-->
						<td>${item.name}</td>
						<td>${item.quantity}</td>
						<td style="width: 60px;">	
							<button type="button" class="fas fa-plus"
								onClick="cartLS.quantity(${item.id},1)"></button>
						</td>
						<td style="width: 60px;>	
							<button type="button" class="btn btn-block btn-sm btn-outline-primary"
								onClick="cartLS.quantity(${item.id},-1)">-</button>
						</td>
						<td class="text-right">${item.price}kr</td>
						<td class="text-right"><Button class="korgknapp" onClick="cartLS.remove(${item.id})">Ta bort</Button></td>
					</tr>`).join("")

			$total.innerHTML = cartLS.total() + "kr";
        }

       
	