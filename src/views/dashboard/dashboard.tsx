import { Container, Main, PageLayout, TitleDecoration } from "components";
import { ViewSidebar, ViewHeader } from "views/components";

const Dashboard = () => {
	return (
		<PageLayout>
			<ViewHeader title="Dashboard" />
			<Container>
				<ViewSidebar />
				<Main>
					<TitleDecoration>
						<h2>Main Content</h2>
					</TitleDecoration>
				</Main>
			</Container>
		</PageLayout>
	);
};

export default Dashboard;
