import {Router} from "express";
import * as menu from '../../controller/menus';
export const router = Router();
router.route("/api/menus").get(menu.list);