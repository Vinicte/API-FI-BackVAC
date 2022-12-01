import { SistemaVACController } from "./controller/SistemaVACController"
import { UserController } from "./controller/UserController"

export const Routes = [{
    method: "get",
    route: "/users",
    controller: UserController,
    action: "all"
}, {
    method: "get",
    route: "/users/:id",
    controller: UserController,
    action: "one"
}, {
    method: "post",
    route: "/users",
    controller: UserController,
    action: "save"
}, {
    method: "delete",
    route: "/users/:id",
    controller: UserController,
    action: "remove"
}, {
    method: "get",
    route: "/SistemaVAC",
    controller: SistemaVACController,
    action: "all"
}, {
    method: "get",
    route: "/SistemaVAC/:id",
    controller: SistemaVACController,
    action: "one"
}, {
    method: "post",
    route: "/SistemaVAC",
    controller: SistemaVACController,
    action: "save"
}, {
    method: "delete",
    route: "/SistemaVAC/:id",
    controller: SistemaVACController,
    action: "remove"
}]



