import { Router } from 'express';
import controllers from '../../controllers/controllers';

export const router = Router();

// Matches with "/api/question"
router.route('/question').get(controllers.findAll);
router.route('/newQuestion').post(controllers.create);
router.route('/SavedQuestions/:email/:id').post(controllers.save);
router.route('/UnsavedQuestions/:email/:id').post(controllers.unsave);


router.route("/SavedQ/:email").get(controllers.findAllSaved);

// router.route('/newQuestion').get(controllers.findNew);

