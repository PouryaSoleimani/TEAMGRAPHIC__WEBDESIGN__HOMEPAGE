function usersHandler(request, response) {
    switch (request.method) {
        case "GET": { return response.json({ message: "GET METHOD", users }) }
        default:
    }
}