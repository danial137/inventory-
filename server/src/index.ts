import "dotenv/config";

import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

// routes
import dashboardRoutes from "./routes/dashboardRoutes";
import productRoutes from "./routes/productRoutes";
import userRouter from "./routes/userRouter";

const app = express();

app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use("/dashboard", dashboardRoutes);
app.use("/products", productRoutes);
app.use("/users", userRouter);

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`server run at port ${port}`);
});
