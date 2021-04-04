import {ComponentType, useContext, useEffect} from 'react';
import {CompositionManager} from './CompositionManager';
import {
	addStaticComposition,
	getIsEvaluation,
	removeStaticComposition,
} from './register-root';
import {useLazyComponent} from './use-lazy-component';

export type CompProps<T> =
	| {
			lazyComponent: () => Promise<{default: ComponentType<T>}>;
	  }
	| {
			component: ComponentType<T>;
	  };

type Props<T> = {
	width: number;
	height: number;
	fps: number;
	durationInFrames: number;
	id: string;
	defaultProps?: T;
} & CompProps<T>;

export const Composition = <T,>({
	width,
	height,
	fps,
	durationInFrames,
	id,
	defaultProps: props,
	...compProps
}: Props<T>) => {
	const {registerComposition, unregisterComposition} = useContext(
		CompositionManager
	);

	const lazy = useLazyComponent(compProps);

	useEffect(() => {
		// Ensure it's a URL safe id
		if (!id) {
			throw new Error('No id for composition passed.');
		}
		if (!id.match(/^([a-zA-Z0-9-])+$/g)) {
			throw new Error(
				`Composition id can only contain a-z, A-Z, 0-9 and -. You passed ${id}`
			);
		}
		if (typeof width !== 'number') {
			throw new Error(
				`The "width" of a composition must be a number, but you passed a ${typeof width}`
			);
		}
		if (width <= 0) {
			throw new TypeError(
				`The "width" of a composition must be positive, but got ${width}.`
			);
		}
		if (typeof height !== 'number') {
			throw new Error(
				`The "height" of a composition must be a number, but you passed a ${typeof height}`
			);
		}
		if (height <= 0) {
			throw new TypeError(
				`The "height" of a composition must be positive, but got ${height}.`
			);
		}
		if (typeof durationInFrames !== 'number') {
			throw new Error(
				`The "durationInFrames" of a composition must be a number, but you passed a ${typeof durationInFrames}`
			);
		}
		if (durationInFrames <= 0) {
			throw new TypeError(
				`The "durationInFrames" of a composition must be positive, but got ${durationInFrames}.`
			);
		}
		if (typeof fps !== 'number') {
			throw new Error(
				`The "fps" of a composition must be a number, but you passed a ${typeof fps}`
			);
		}
		if (fps <= 0) {
			throw new TypeError(
				`The "fps" of a composition must be positive, but got ${fps}.`
			);
		}
		registerComposition<T>({
			durationInFrames,
			fps,
			height,
			width,
			id,
			component: lazy,
			props,
		});

		if (getIsEvaluation()) {
			addStaticComposition({
				component: lazy,
				durationInFrames,
				fps,
				height,
				id,
				width,
			});
		}

		return () => {
			unregisterComposition(id);
			removeStaticComposition(id);
		};
	}, [
		durationInFrames,
		fps,
		height,
		lazy,
		id,
		props,
		registerComposition,
		unregisterComposition,
		width,
	]);

	return null;
};
