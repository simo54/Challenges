quarters = {
    'q_one': {
        "cost_price": 32.67,
        "sell_price": 45.00,
        "inventory": 1200
    },

    'q_two': {
        "cost_price": 225.89,
        "sell_price": 550.00,
        "inventory": 100
    },

    'q_three': {
        "cost_price": 2.77,
        "sell_price": 7.95,
        "inventory": 8500
    }
}

annual_profit = {}

for quarter, data in quarters.items():
    total_quarter_sales = (data["sell_price"] -
                           data["cost_price"]) * data["inventory"]
    annual_profit[quarter] = total_quarter_sales.__round__()

print("Year 2020 Profit: " + str(sum(annual_profit.values())))
