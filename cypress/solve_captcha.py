from goodbyecaptcha.solver import Solver

pageurl = "https://www.google.com/recaptcha/api2/demo"

# No Proxy
client = Solver(
    pageurl, lang='en-US', options={"ignoreHTTPSErrors": True, "args": ["--timeout 5"]}
)

solution = client.loop.run_until_complete(client.start())
if solution:
    print(solution)