const bodyParser = require('body-parser');
const express = require('express');
const dbConnect = require('./config/dbConnect');
const { notFound, errorHandler } = require('./middlewares/errorHandler');
const app = express();
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 4000;
const authRouter = require('./routes/authRoute');
const productRouter = require('./routes/productRoute');
const blogRouter = require('./routes/blogRoute');
const prodCatRouter = require('./routes/prodCatRoute');
const blogCatRouter = require('./routes/blogCatRoute');
const brandRouter = require('./routes/brandRoute')
const couponRouter = require('./routes/couponRoute');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
dbConnect();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/v1/user', authRouter);
app.use('/api/v1/product', productRouter);
app.use('/api/v1/blog', blogRouter);
app.use("/api/v1/prodcategory", prodCatRouter);
app.use("/api/v1/blogcategory", blogCatRouter);
app.use('/api/v1/brand', brandRouter);
app.use('/api/v1/coupon', couponRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running at: http://localhost:${PORT}`);
});