import {RenderInternals} from '@remotion/renderer';
import path from 'path';
import {getExpectedOutName} from '../functions/helpers/expected-out-name';
import {getRenderMetadata} from '../functions/helpers/get-render-metadata';
import {
	lambdaDownloadFileWithProgress,
	LambdaReadFileProgress,
} from '../functions/helpers/read-with-progress';
import {AwsRegion} from '../pricing/aws-regions';
import {getAccountId} from '../shared/get-account-id';

export type DownloadMediaInput = {
	region: AwsRegion;
	bucketName: string;
	renderId: string;
	outPath: string;
	onProgress?: LambdaReadFileProgress;
};

export type DownloadMediaOutput = {
	outputPath: string;
	sizeInBytes: number;
};

export const downloadMedia = async (
	input: DownloadMediaInput
): Promise<DownloadMediaOutput> => {
	const expectedBucketOwner = await getAccountId({
		region: input.region,
	});
	const renderMetadata = await getRenderMetadata({
		bucketName: input.bucketName,
		expectedBucketOwner,
		region: input.region,
		renderId: input.renderId,
	});

	const outputPath = path.resolve(process.cwd(), input.outPath);
	RenderInternals.ensureOutputDirectory(outputPath);
	const {sizeInBytes} = await lambdaDownloadFileWithProgress({
		bucketName: input.bucketName,
		expectedBucketOwner,
		key: getExpectedOutName(renderMetadata),
		region: input.region,
		onProgress: input.onProgress ?? (() => undefined),
		outputPath,
	});

	return {
		outputPath,
		sizeInBytes,
	};
};

/**
 * @deprecated Renamed to downloadMedia()
 */
export const downloadVideo = downloadMedia;