import { check, validationResult } from 'express-validator';

const validationCarrera = () => {
    return [
        check('nombre')
            .notEmpty().withMessage('El campo nombre está vacío')
            .isLength({ max: 40 }).withMessage('El nombre no debe exceder los 40 caracteres'),

        check('tipo')
            .notEmpty().withMessage('El campo tipo está vacío')
            .isLength({ max: 60 }).withMessage('El tipo no debe exceder los 60 caracteres'),

        check('descripcion')
            .notEmpty().withMessage('El campo descripción está vacío')
            .isLength({ max: 100 }).withMessage('La descripción no debe exceder los 100 caracteres'),

        check('plan_estudio')
            .notEmpty().withMessage('El campo plan de estudio está vacío')
            .isLength({ max: 100 }).withMessage('El plan de estudio no debe exceder los 100 caracteres'),

        check('modalidad')
            .notEmpty().withMessage('El campo modalidad está vacío')
            .isIn(['presencial', 'virtual', 'mixta']).withMessage('La modalidad debe ser presencial, virtual o mixta'),

        check('cupo')
            .notEmpty().withMessage('El campo cupo está vacío')
            .isLength({ max: 45 }).withMessage('El cupo no debe exceder los 45 caracteres'),

        check('fecha_inscripcion')
            .notEmpty().withMessage('El campo fecha de inscripción está vacío')
            .isDate().withMessage('La fecha de inscripción debe ser una fecha válida'),

        check('duracion_anio')
            .optional() 
            .isInt({ min: 0 }).withMessage('La duración en años debe ser un número entero positivo'),

        check('duracion_meses')
            .optional() 
            .isInt({ min: 0 }).withMessage('La duración en meses debe ser un número entero positivo'),

        check('duracion_semanas')
            .optional() 
            .isInt({ min: 0 }).withMessage('La duración en semanas debe ser un número entero positivo'),

        (req, res, next) => {
            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                const checkErrors = errors.array();
                console.log(checkErrors);

                res.status(400).json({
                    message: checkErrors
                });
                return;
            }
            next();
        }
    ];
};

export { validationCarrera };
