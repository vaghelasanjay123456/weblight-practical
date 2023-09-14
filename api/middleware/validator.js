import niv from "node-input-validator";

export async function createAdminValidator(req, res, next) {
	const objValidation = new niv.Validator(req.body, {
		name: "required|string",
		email: "required|email",
		password: "required"
	});
	const matched = await objValidation.check();
	if (!matched) {
		return res.status(422).send({
			status: 422,
			message: "Validation Error",
			error: objValidation.errors,
		});
	} else {
		next();
	}
}

export async function createCategoryValidator(req, res, next) {
	const objValidation = new niv.Validator(req.body, {
		name: "required|string"
	});
	const matched = await objValidation.check();
	if (!matched) {
		return res.status(422).send({
			status: 422,
			message: "Validation Error",
			error: objValidation.errors,
		});
	} else {
		next();
	}
}

export async function createProductValidator(req, res, next) {
	const objValidation = new niv.Validator(req.body, {
		name: "required|string",
		category_id: "required",
		price: "required"
	});
	const matched = await objValidation.check();
	if (!matched) {
		return res.status(422).send({
			status: 422,
			message: "Validation Error",
			error: objValidation.errors,
		});
	} else {
		next();
	}
}

export async function createCustomerValidator(req, res, next) {
	const objValidation = new niv.Validator(req.body, {
		name: "required|string",
		email: "required|email",
		password: "required"
	});
	const matched = await objValidation.check();
	if (!matched) {
		return res.status(422).send({
			status: 422,
			message: "Validation Error",
			error: objValidation.errors,
		});
	} else {
		next();
	}
}

export async function loginAdminValidator(req, res, next) {
	const objValidation = new niv.Validator(req.body, {
		email: "required|email",
        password: "required",
	});
	const matched = await objValidation.check();
	if (!matched) {
		return res.status(422).send({
			status: 422,
			message: "Validation Error",
			error: objValidation.errors,
		});
	} else {
		next();
	}
}

export async function loginCustomerValidator(req, res, next) {
	const objValidation = new niv.Validator(req.body, {
		email: "required|email",
        password: "required",
	});
	const matched = await objValidation.check();
	if (!matched) {
		return res.status(422).send({
			status: 422,
			message: "Validation Error",
			error: objValidation.errors,
		});
	} else {
		next();
	}
}

