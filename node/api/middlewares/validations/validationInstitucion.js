import { check, validationResult } from 'express-validator';

const validationInstitucion = () => {

    return [

        check('nombre')
            .notEmpty().withMessage('El campo nombre está vacío')
            .isLength({ max: 60 }).withMessage('El nombre no debe exceder los 60 caracteres'),
        
        check('correo')
            .notEmpty().withMessage('El campo correo está vacío')
            .isEmail().withMessage('El correo debe ser un email válido')
            .isLength({ max: 60 }).withMessage('El correo no debe exceder los 60 caracteres'),

        check('direccion')
            .notEmpty().withMessage('El campo dirección está vacío')
            .isLength({ max: 60 }).withMessage('La dirección no debe exceder los 60 caracteres'),

        check('cue')
            .notEmpty().withMessage('El campo CUE está vacío')
            .isInt().withMessage('El CUE debe ser un número entero')
            .isLength({ max: 11 }).withMessage('El CUE no debe exceder 11 dígitos'), 

        check('ubicacion_lat')
            .notEmpty().withMessage('El campo latitud está vacío')
            .isDecimal().withMessage('La latitud debe ser un número decimal')
            .isLength({ max: 23 }).withMessage('La latitud no debe exceder los 22 caracteres'),

        check('ubicacion_long')
            .notEmpty().withMessage('El campo longitud está vacío')
            .isDecimal().withMessage('La longitud debe ser un número decimal')
            .isLength({ max: 23 }).withMessage('La longitud no debe exceder los 22 caracteres'), 

        check('telefono')
            .notEmpty().withMessage('El campo teléfono está vacío')
            .isLength({ max: 15 }).withMessage('El teléfono no debe exceder los 15 caracteres'),

        check('pagina')
            .optional() 
            .isLength({ max: 45 }).withMessage('La página no debe exceder los 45 caracteres'),
      
        
        
        (req, res, next) => {
            
            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                
                const checkErrors = errors.array()
                console.log(checkErrors);
                
                res.status(400).json({
                    
                    
                    message: checkErrors
                });
                return;
            }
            next();
        }
    ]
}

export {validationInstitucion}