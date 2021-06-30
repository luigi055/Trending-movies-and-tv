import {
	Container,
	DesignH2,
	Main,
	PageLayout,
	TitleDecoration,
} from "components";
import { useSelector } from "react-redux";
import { selectIsLoading } from "services/redux/features/loading";
import { ViewSidebar, ViewHeader } from "views/_shared";

type TemplateProps = { headerTitle: string; pageTitle: string };

const PageTemplate: React.FC<TemplateProps> = ({
	children,
	headerTitle,
	pageTitle,
}) => {
	const isLoading = useSelector(selectIsLoading);
	return (
		<PageLayout>
			<ViewHeader title={headerTitle} />
			<Container>
				<ViewSidebar />
				<Main>
					<TitleDecoration>
						<DesignH2 data-testid="template__title">{pageTitle}</DesignH2>
					</TitleDecoration>
					{isLoading ? <h1 data-testid="loading">Loading...</h1> : children}
				</Main>
			</Container>
		</PageLayout>
	);
};

export default PageTemplate;
